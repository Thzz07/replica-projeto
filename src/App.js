import React from "react";
import { FaPlaystation } from "react-icons/fa6";
import { FaXbox } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-[url('https://lolstatic-a.akamaihd.net/rso-authenticator-ui/0.68.48/assets/arcane_dsktp_centerAlignedCrd_BG_2x.jpg')] bg-cover bg-center justify-between flex flex-col items-center">
      <header className="flex w-full">
        <img src="https://seeklogo.com/images/R/riot-games-logo-D89C9A9FF8-seeklogo.com.png" className="w-36 m-12 brightness-200 contrast-200 saturate-100 self-start" />
      </header>
      <main>
        <div className="bg-white p-12 w-[450px] h-[540px] flex flex-col justify-between">
          <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Fazer login</h2>
          <div className="mb-4">
            <input
              placeholder="NOME DE USUARIO"
              id="userName"
              className="rounded w-full py-2 px-3 focus:outline-none bg-gray-100 placeholder-gray-600 text-xs h-10 font-semibold"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="SENHA"
              className="rounded w-full py-2 px-3 focus:outline-none bg-gray-100 placeholder-gray-600 text-xs h-10 font-semibold"
            />
          </div>

          <div className="flex gap-7">
            <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded w-12">
              <img src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/facebook-new.png"></img>
            </button>
            <button className="bg-white hover:bg-gray-200 font-bold py-2 px-4 rounded w-12 border-gray-200 border">
              <img src="https://img.icons8.com/?size=512&id=17949&format=png"></img>
            </button>
            <button className="bg-black py-2 px-4 rounded w-12">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s"></img>
            </button>
            <button className="bg-green-800 hover:bg-green-900 py-2 px-4 rounded w-12 text-white">
              <FaXbox />
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded w-12 text-white">
              <FaPlaystation />
            </button>
          </div>
          <div className="flex items-center mb-4 mt-3">
            <input
              type="checkbox"
              className="mr-2 bg-gray-500"
            />
            <label className="text-sm">
              Manter login
            </label>
          </div>
          </div>
          <div>
          <div className="flex items-center justify-center">
            <button className="bg-white p-6 rounded-3xl text-gray-400 border border-gray-400 flex items-center justify-center">
              <FaArrowRight className="text-gray-400" />
            </button>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="text-gray-700 text-xs font-bold"
            >
              NÃO CONSEGUE FAZER LOGIN?
            </a>
            <p className="text-gray-700 mt-2 text-xs font-bold">
              CRIAR CONTA
            </p>
          </div>
          </div>
        </div>
      </main>
      <footer className="w-full flex">
        <div className="text-xs text-gray-200 self-start p-10">
          <p>SUPORTE AVISO DE PRIVACIDADE TERMOS DE SERVIÇO PREFERÊNCIAS DE COOKIES</p>
          <br></br>
          <p>ESTE SITE É PROTEGIDO POR HCAPTCHA. A POLÍTICA DE PRIVACIDADE E OS TERMOS DE SERVIÇO RELEVANTES SÃO APLICÁVEIS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
