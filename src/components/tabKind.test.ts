import type { TabKind } from '@/transport';

import { tabKindMeta } from './tabKind';

describe('tabKindMeta', () => {
  const knownKinds: TabKind[] = ['terminal', 'vcs', 'editor', 'diffViewer'];

  it.each(knownKinds)('returns metadata for the %s kind', (kind) => {
    const meta = tabKindMeta(kind);
    expect(meta.label).toBeTruthy();
    expect(meta.title).toBeTruthy();
    expect(meta.body).toBeTruthy();
    expect(meta.icon).toBeTruthy();
    expect(meta.label).not.toBe('Unsupported');
  });

  it('falls back to the unsupported metadata for an unknown kind', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    const meta = tabKindMeta('hologram');

    expect(meta.label).toBe('Unsupported');
    expect(meta.title).toBe('Unsupported tab');
    expect(meta.icon).toBe('help-circle-outline');
    warn.mockRestore();
  });

  it('warns with the unknown kind for diagnosis', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    tabKindMeta('hologram');

    expect(warn).toHaveBeenCalledWith('[tabs] unsupported tab kind=hologram');
    warn.mockRestore();
  });
});
