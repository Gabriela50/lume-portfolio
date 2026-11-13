from pathlib import Path

root = Path(__file__).resolve().parents[1]
assert (root / "app/page.tsx").is_file()
assert (root / "app/charm/page.tsx").is_file()

pdf = root / "public/downloads/CV_Gabriela_Benitez_Herrera.pdf"
assert pdf.is_file(), "No se encontró el CV descargable"
with pdf.open("rb") as f:
    assert f.read(5) == b"%PDF-", "El CV no es un PDF válido"

print("OK: portafolio, simulador CHARM y CV descargable")
