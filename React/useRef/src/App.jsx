import { useRef } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let { register } = useForm();

  let inpRef = useRef({});

  let audioRef = useRef(null);

  return (
    <div className="h-screen bg-black text-white flex justify-center items-center flex-col gap-4">
      <h1>React hook form</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          let { name, email, password, mobile } = inpRef.current;

          console.log(name.value, email.value, password.value, mobile.value);
        }}
        className="p-4 border border-white rounded-xl  flex flex-col gap-5 w-80"
        action=""
      >
        <input
          ref={(e) => (inpRef.current.name = e)}
          className="p-2 border border-white rounded outline-0"
          type="text"
          placeholder="Name"
        />
        <input
          ref={(e) => (inpRef.current.email = e)}
          className="p-2 border border-white rounded outline-0"
          type="text"
          placeholder="Email"
        />

        <input
          ref={(e) => (inpRef.current.password = e)}
          className="p-2 border border-white rounded outline-0"
          type="text"
          placeholder="Password"
        />

        <input
          ref={(e) => (inpRef.current.mobile = e)}
          className="p-2 border border-white rounded outline-0"
          type="number"
          placeholder="Mobile"
        />

        <button className="p-2 bg-blue-700 text-white border-0 rounded cursor-pointer">
          Submit
        </button>
      </form>

      <div>
        <audio ref={audioRef} src="hak.mp3"></audio>
        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClick={() => audioRef.current.pau()}>Pause</button>
      </div>
    </div>
  );
};

export default App;
