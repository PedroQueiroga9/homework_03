import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

// ─── Dados mockados ───────────────────────────────────────────
const USUARIOS = [
  {
    id: '1',
    nome: 'Ana Silva',
    cargo: 'Desenvolvedora Frontend',
    cidade: 'São Paulo, SP',
    ativo: true,
    iniciais: 'AS',
    cor: '#534AB7',
  },
  {
    id: '2',
    nome: 'Bruno Costa',
    cargo: 'Designer UI/UX',
    cidade: 'Recife, PE',
    ativo: true,
    iniciais: 'BC',
    cor: '#E05C5C',
  },
  {
    id: '3',
    nome: 'Carla Mendes',
    cargo: 'Engenheira de QA',
    cidade: 'João Pessoa, PB',
    ativo: false,
    iniciais: 'CM',
    cor: '#2E9E6B',
  },
  {
    id: '4',
    nome: 'Diego Rocha',
    cargo: 'Desenvolvedor Backend',
    cidade: 'Fortaleza, CE',
    ativo: true,
    iniciais: 'DR',
    cor: '#D97E1A',
  },
  {
    id: '5',
    nome: 'Elis Santos',
    cargo: 'Product Manager',
    cidade: 'Natal, RN',
    ativo: false,
    iniciais: 'ES',
    cor: '#8B3CC4',
  },
];

// ─── Componente Card ──────────────────────────────────────────
function CardUsuario({ usuario }) {
  return (
    <View style={styles.card}>

      {/* Avatar com iniciais */}
      <View style={[styles.avatar, { backgroundColor: usuario.cor }]}>
        <Text style={styles.avatarTexto}>{usuario.iniciais}</Text>
      </View>

      {/* Informações do usuário */}
      <View style={styles.info}>
        <Text style={styles.nome}>{usuario.nome}</Text>
        <Text style={styles.cargo}>{usuario.cargo}</Text>
        <Text style={styles.cidade}>📍 {usuario.cidade}</Text>
      </View>

      {/* Badge de status */}
      <View style={[
        styles.badge,
        { backgroundColor: usuario.ativo ? '#E6F9F1' : '#F5F5F5' }
      ]}>
        <Text style={[
          styles.badgeTexto,
          { color: usuario.ativo ? '#2E9E6B' : '#999' }
        ]}>
          {usuario.ativo ? 'Ativo' : 'Inativo'}
        </Text>
      </View>

    </View>
  );
}

// ─── Tela Principal ───────────────────────────────────────────
export default function App() {
  const totalAtivos = USUARIOS.filter(u => u.ativo).length;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#534AB7" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Lista de Usuários</Text>
        <Text style={styles.headerSubtitulo}>
          {USUARIOS.length} usuários · {totalAtivos} ativos
        </Text>
      </View>

      {/* Lista de cards */}
      <ScrollView
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      >
        {USUARIOS.map(usuario => (
          <CardUsuario key={usuario.id} usuario={usuario} />
        ))}

        {/* Rodapé da lista */}
        <Text style={styles.rodape}>— Fim da lista —</Text>
      </ScrollView>

    </View>
  );
}

// ─── Estilos ──────────────────────────────────────────────────
const ROXO = '#534AB7';

const styles = StyleSheet.create({
  // Container geral
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
  },

  // Header
  header: {
    backgroundColor: ROXO,
    paddingTop: 52,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitulo: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
  },

  // Lista
  lista: {
    padding: 16,
    paddingBottom: 32,
  },

  // Card
  card: {
    flexDirection: 'row',        // elementos lado a lado
    alignItems: 'center',        // alinha verticalmente ao centro
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  // Avatar
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },

  // Info (ocupa o espaço restante)
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 2,
  },
  cargo: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  cidade: {
    fontSize: 12,
    color: '#999',
  },

  // Badge de status
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 8,
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: '700',
  },

  // Rodapé
  rodape: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: 13,
    marginTop: 8,
  },
});
