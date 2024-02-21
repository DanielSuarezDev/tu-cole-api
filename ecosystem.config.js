module.exports = {
  apps: [{
    name: 'Nest Api School',
    script: './dist/src/main.js',

    // Opciones de instancias
    instances: 1, // // 'max', // Puede ser un número específico o 'max' para utilizar todas las CPUs disponibles
    exec_mode: 'fork', // 'fork' para una instancia única o 'cluster' para múltiples instancias

    // Gestión de logs
    output: './logs/out.log',
    error: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    merge_logs: true,

    // Reinicio automático y monitoreo
    watch: false, // Se puede configurar para reiniciar la app si detecta cambios en los archivos
    max_memory_restart: '1G', // Reinicia la app si excede la memoria especificada
    autorestart: true, // Reinicia automáticamente la app si se cae

    // Variables de entorno
    env: {
      NODE_ENV: 'production',
    },
    // env_production: {
      // NODE_ENV: 'production',
    // },

    // Limpiar logs de manera periódica
    // log_file: '/path/to/combined/outerr.logs',
    // out_file: '/path/to/out.log',
    // error_file: '/path/to/err.log',
    combine_logs: true,
    max_size: '100M',
    rotate_interval: '0 0 * * *' // Rotación diaria de logs
  }]
};
