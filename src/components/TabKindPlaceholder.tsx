import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { useTokens } from '@/theme';
import type { Tab } from '@/transport';

import { tabKindMeta } from './tabKind';

export function TabKindPlaceholder({ tab }: { tab: Tab }) {
  const tokens = useTokens();
  const meta = tabKindMeta(tab.kind);
  return (
    <View style={[styles.root, { backgroundColor: tokens.surface.primary }]}>
      <View
        style={[
          styles.iconRing,
          { backgroundColor: tokens.surface.secondary, borderColor: tokens.border.subtle },
        ]}>
        <Ionicons name={meta.icon} size={28} color={tokens.text.secondary} />
      </View>
      <Text style={[styles.title, { color: tokens.text.primary }]}>{meta.title}</Text>
      {tab.title ? (
        <Text style={[styles.subtitle, { color: tokens.text.secondary }]} numberOfLines={2}>
          {tab.title}
        </Text>
      ) : null}
      <Text style={[styles.body, { color: tokens.text.muted }]}>{meta.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 12 },
  iconRing: {
    width: 64,
    height: 64,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  title: { fontSize: 18, fontWeight: '600' },
  subtitle: { fontSize: 14, textAlign: 'center' },
  body: { fontSize: 13, textAlign: 'center' },
});
