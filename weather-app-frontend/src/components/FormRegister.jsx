function FormRegister() {
    return ( 
        <>
            <form action="">
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" />
                <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="password">Contraseña</label>
                <input type="text" />
                <button type="submit">Registrarse</button>
            </form>
        </>
     );
}

export default FormRegister;