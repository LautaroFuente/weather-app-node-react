function FormLogin() {
    return ( 
        <>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="password">Contraseña</label>
                <input type="text" />
                <button type="submit">Ingresar</button>
            </form>
        </>
     );
}

export default FormLogin;