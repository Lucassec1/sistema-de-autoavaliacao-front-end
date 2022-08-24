import React, { createContext, useState, useEffect } from "react";
import api from "../../api";

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
    }, []);

    async function handleLogin() {
        const {data: { token }} = await api.post("/auth/login");

        localStorage.setItem("token", JSON.stringify(token));
        
    }

    return (
        <Context.Provider value={{ authenticated }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider };