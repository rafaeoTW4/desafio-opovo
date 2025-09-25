# Use 0.0.0.0 para permitir que outras máquinas na rede se conectem
php -S 0.0.0.0:8000

# Verifique o status do firewall
sudo ufw status

# Se estiver ativo, permita o tráfego na porta 8000
sudo ufw allow 8000

# Recarregue as regras
sudo ufw reload

