declare namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_KEYCLOAK_CLIENT_ID: string
      KEYCLOAK_CLIENT_SECRET: string
      NEXT_LOCAL_KEYCLOAK_URL: string
      NEXT_PUBLIC_KEYCLOAK_REALM: string
      NEXT_CONTAINER_KEYCLOAK_ENDPOINT: string
    }
  }
  