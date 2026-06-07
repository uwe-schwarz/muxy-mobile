import type { Ionicons } from '@expo/vector-icons';

import type { TabKind } from '@/transport';

type IoniconName = keyof typeof Ionicons.glyphMap;

export type TabKindMeta = {
  icon: IoniconName;
  label: string;
  title: string;
  body: string;
};

const META: Record<TabKind, TabKindMeta> = {
  terminal: {
    icon: 'terminal-outline',
    label: 'Terminal',
    title: 'Terminal',
    body: 'Live terminal rendering arrives in the next phase.',
  },
  vcs: {
    icon: 'git-branch-outline',
    label: 'VCS',
    title: 'Version control',
    body: 'Git status, commits, and PR creation will land in a later phase.',
  },
  editor: {
    icon: 'document-text-outline',
    label: 'Editor',
    title: 'Editor',
    body: 'Editor mirroring isn’t in scope for the mobile app yet.',
  },
  diffViewer: {
    icon: 'git-compare-outline',
    label: 'Diff',
    title: 'Diff viewer',
    body: 'Diff viewing isn’t in scope for the mobile app yet.',
  },
};

const UNSUPPORTED: TabKindMeta = {
  icon: 'help-circle-outline',
  label: 'Unsupported',
  title: 'Unsupported tab',
  body: 'This tab type isn’t supported in the mobile app. Update Muxy Mobile or use the desktop app.',
};

export function tabKindMeta(kind: string): TabKindMeta {
  const known = META[kind as TabKind];
  if (known) return known;
  console.warn('[tabs] unsupported tab kind=' + kind);
  return UNSUPPORTED;
}
