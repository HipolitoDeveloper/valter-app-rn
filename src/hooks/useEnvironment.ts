type TEnvironment = 'production' | 'development'

interface IUseEnvironmentReturn {
    environment: TEnvironment,
    isDevelopment: boolean
}

const useEnvironment = (): IUseEnvironmentReturn => {
    const environment = <"production" | "development">process.env.NODE_ENV as TEnvironment

    return {
        environment: environment,
        isDevelopment: environment === 'development'
    }
}

export default useEnvironment
