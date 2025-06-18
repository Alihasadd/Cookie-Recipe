import Modal from "./Modal";
import CookieRecipe from "./CookieRecipe";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="bg-purple-500 w-full justify-center">
        <div className="justify-between font-bold text-white flex p-4 border-4 border-amber-300">
          <div>Santi's Cookie Recipe</div>
          <div className="flex items-center gap-2">
            <button onClick={setIsModalOpen}>Sign In</button>
            <i class="fa-solid fa-right-to-bracket"></i>
          </div>
        </div>
      </div>
      <CookieRecipe />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default App;
