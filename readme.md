# Herramienta para descomprimir entregas descargadas de Aulas

## Requisitos

- Node

## Como usar

1. Clonar repositorio o descargar desde github
```bash
git clone https://github.com/maufz/entregas-aulas.git
```
2. Ubicar los archivos zip descargados siguiendo la estructura a continuación:

```
.
└── grupos/
    ├── <Nombre del grupo>/
    │   ├── entrega1.zip
    │   ├── entrega2.zip
    │   ├── entrega3.zip
    │   └── ...
    └── <Nombre del grupo>/
        ├── entrega1.zip
        ├── entrega2.zip
        ├── entrega3.zip
        └── ...
```

3. Instalar dependencias

```bash
npm install
```

4. Ejecutar script
```bash
npm run unzip
```

> Este script solo descomprime archivos .zip
