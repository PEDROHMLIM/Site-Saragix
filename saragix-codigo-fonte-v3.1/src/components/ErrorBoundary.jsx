import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Saragix runtime error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0c] text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-[#121217] border border-[#262634] rounded-2xl p-6 shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">Ops, algo inesperado ocorreu</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Uma falha momentânea foi interceptada com segurança para proteger seus dados.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="p-3 rounded-xl bg-[#0c0c10] border border-[#1e1e28] text-[11px] font-mono text-zinc-400 text-left overflow-x-auto">
                {this.state.error.message}
              </div>
            )}

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="px-4 py-2 rounded-xl bg-[#1c1c26] hover:bg-[#252532] text-xs font-semibold text-zinc-200 transition"
              >
                Tentar Continuar
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center gap-1.5 transition shadow-lg shadow-blue-900/30"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Recarregar Página
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
