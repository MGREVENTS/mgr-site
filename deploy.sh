#!/bin/bash
# ═══════════════════════════════════════════
# MGR Events — Deploy to Hostinger
# ═══════════════════════════════════════════
# Usage: ./deploy.sh
#
# Prérequis : 
#   1. Remplir les variables ci-dessous
#   2. SSH activé sur Hostinger (hPanel → Avancé → Accès SSH)
#
# Alternative sans SSH : upload via hPanel File Manager

# ── CONFIG — À REMPLIR ──
HOSTINGER_USER="u123456789"          # ton user Hostinger (hPanel → Détails SSH)
HOSTINGER_HOST="ssh.mgrevents.fr"     # ou l'IP SSH fournie par Hostinger
HOSTINGER_PORT="65002"                # port SSH Hostinger (souvent 65002)
REMOTE_PATH="/home/$HOSTINGER_USER/public_html"

# ── DEPLOY ──
echo "🚀 Déploiement MGR Events..."
echo ""

rsync -avz --delete \
  --exclude '.git' \
  --exclude 'deploy.sh' \
  --exclude 'CLAUDE.md' \
  --exclude '.DS_Store' \
  --exclude 'node_modules' \
  -e "ssh -p $HOSTINGER_PORT" \
  ./ "$HOSTINGER_USER@$HOSTINGER_HOST:$REMOTE_PATH/"

echo ""
echo "✅ Déploiement terminé → https://www.mgrevents.fr"
