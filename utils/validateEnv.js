const variables = [
  'JWT_SECRET',
  'PORT',
  'DATABASE_URL',
  'NODE_ENV'
]
for(let variable of variables){
  if(!process.env[variable]){
    console.error("Missing environment variable " + variable)
    process.exit(1)
  }
}