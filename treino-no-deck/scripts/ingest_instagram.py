#!/usr/bin/env python3
"""
Script de conveniencia para baixar reels do Instagram para a landing page.
Uso: python scripts/ingest_instagram.py

Requisitos: pip install yt-dlp
Este script e executado apenas uma vez no setup, nunca em runtime.
Falha graciosamente por item, sem travar o build.

Caminho principal recomendado: download manual via Instagram App ou Meta Business Suite.
"""

import subprocess
import sys
from pathlib import Path

REELS = [
    "https://www.instagram.com/lebuffetoficial/reel/Cj3ntxdj_GJ/",
    "https://www.instagram.com/lebuffetoficial/reel/DZ20398STtB/",
    "https://www.instagram.com/bodywise.treinamentofisico/reel/DZ5Zz9sR7rk/",
    "https://www.instagram.com/bodywise.treinamentofisico/reel/DaBe77tRSAG/",
]

OUTPUT_DIR = Path(__file__).resolve().parent.parent / "public" / "assets" / "videos"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for url in REELS:
        print(f"[ingest] Baixando: {url}")
        try:
            subprocess.run(
                [
                    "yt-dlp",
                    "--format", "mp4",
                    "--output", str(OUTPUT_DIR / "%(id)s.%(ext)s"),
                    "--no-playlist",
                    url,
                ],
                check=True,
                capture_output=True,
                text=True,
            )
            print(f"[ingest] OK: {url}")
        except subprocess.CalledProcessError as e:
            print(f"[ingest] ERRO em {url}: {e.stderr or e}", file=sys.stderr)
        except FileNotFoundError:
            print(
                "[ingest] yt-dlp nao encontrado. Instale com: pip install yt-dlp",
                file=sys.stderr,
            )
            sys.exit(1)

    print("[ingest] Concluido. Renomeie os arquivos para o padrao esperado (reel-lebuffet-1.mp4, etc.)")


if __name__ == "__main__":
    main()
