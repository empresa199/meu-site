import { useState } from "react";
import Header from "@/components/platform/Header";
import Sidebar from "@/components/platform/Sidebar";
import HeroBanner from "@/components/platform/HeroBanner";
import WithdrawalTicker from "@/components/platform/WithdrawalTicker";
import CryptoInfo from "@/components/platform/CryptoInfo";
import GameGrid from "@/components/platform/GameGrid";
import SupportChat from "@/components/platform/SupportChat";
import DepositModal from "@/components/platform/DepositModal";
import WithdrawalModal from "@/components/platform/WithdrawalModal";
import { useAuth } from "@/contexts/AuthContext";
import { Shield, FileText, Headphones, Send } from "lucide-react";

const Index = () => {
  const [chatDeposit, setChatDeposit] = useState(false);
  const [chatWithdraw, setChatWithdraw] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={() => setSidebarOpen((p) => !p)} sidebarOpen={sidebarOpen} />
      <WithdrawalTicker />
      <div className="flex">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onOpenDeposit={() => setChatDeposit(true)}
          onOpenWithdraw={() => setChatWithdraw(true)}
        />
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <main className="flex-1 min-w-0">
          <HeroBanner />
          <div className="mt-6">
            <GameGrid />
          </div>

          <footer className="border-t border-border/30 px-6 py-10 mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-6 w-6 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Shield className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="font-display text-base font-bold text-foreground">
                    Cryptona<span className="text-primary">Bet</span>
                  </span>
                </div>
                <p className="text-xs text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
                  Plataforma de entretenimento com saques rápidos em BTC, ETH e USDT.
                  Jogue com responsabilidade. Proibido para menores de 18 anos.
                </p>
                <div className="flex justify-center gap-6 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <FileText className="h-3 w-3" />
                    Termos de Uso
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <Shield className="h-3 w-3" />
                    Privacidade
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <Headphones className="h-3 w-3" />
                    Suporte
                  </span>
                  <span className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
                    <Send className="h-3 w-3" />
                    Telegram
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] text-bitcoin font-semibold bg-bitcoin/10 px-2 py-0.5 rounded-md">BTC</span>
                  <span className="text-[10px] text-ethereum font-semibold bg-ethereum/10 px-2 py-0.5 rounded-md">ETH</span>
                  <span className="text-[10px] text-usdt font-semibold bg-usdt/10 px-2 py-0.5 rounded-md">USDT</span>
                </div>
                <p className="text-[10px] text-muted-foreground/40">
                  © 2026 CryptonaBet. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <SupportChat
        onOpenDeposit={() => setChatDeposit(true)}
        onOpenWithdraw={() => setChatWithdraw(true)}
      />

      <DepositModal open={chatDeposit} onOpenChange={setChatDeposit} />
      <WithdrawalModal
        open={chatWithdraw}
        onOpenChange={setChatWithdraw}
        balance={balance}
        onSuccess={() => {}}
      />
    </div>
  );
};

export default Index;
