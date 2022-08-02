import { IlustracaoVideo } from "./IlustracaoVideo";

export function VideoInital() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center">
            <IlustracaoVideo />
            <div>
                <span className="text-base font-medium block w-3/4 text-center mx-auto text-gray-500">
                    Bem vindo a plataforma de ensino, escolha uma aula e avance! O aprendizado é continuo.
                </span>
            </div>
        </div>
    )
}