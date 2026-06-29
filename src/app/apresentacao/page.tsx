import Link from 'next/link'
import { themes } from '@/themes/registry'

export default function ApresentacaoPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAF8F4] font-sans">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#B08D57] uppercase mb-3">
            Body Wise × Le Buffet Lounge
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
            TREINO NO DECK
          </h1>
          <p className="mt-4 text-sm text-[#D8C9B0]/60 max-w-lg mx-auto">
            Dez direções visuais para o mesmo conteúdo. Selecione uma versão para visualizar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {themes.map((t) => (
            <Link
              key={t.id}
              href={`/${t.slug}`}
              target="_blank"
              className="group block rounded-sm border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#B08D57]/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono text-[#B08D57]/50">{t.id}</span>
                <div className="flex gap-1.5">
                  {t.palette.map((color) => (
                    <div key={color} className="h-3 w-3 rounded-full border border-white/5" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
              <h2 className="font-display text-lg leading-snug text-[#FAF8F4] group-hover:text-[#B08D57] transition-colors">
                {t.name}
              </h2>
              <p className="mt-1.5 text-xs text-[#D8C9B0]/50 leading-relaxed">
                {t.tagline}
              </p>
              <div className="mt-4 flex items-center gap-1 text-[10px] text-[#B08D57]/40 uppercase tracking-wider group-hover:text-[#B08D57]/70 transition-colors">
                <span>Abrir</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-center text-[10px] text-[#D8C9B0]/20 tracking-wider uppercase">
          Selecione uma versão acima para abrir em nova aba
        </p>
      </div>
    </div>
  )
}
