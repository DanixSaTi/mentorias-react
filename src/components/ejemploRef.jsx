import { useRef } from "react"

export const EjemploRef = () =>{

    const inputRef = useRef(null);

    const handleFocus = () => {
        let inputName = inputRef.current;
        inputName.focus();
        
    }

    return (
        <>
            <input type="text" ref={inputRef} name="nombre" id="el input del nombre"/>
            <button onClick={handleFocus}>Darle Focus al Input</button>
            <script>
            </script>
        </>
    )
}