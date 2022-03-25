package com.practica5.practica5;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({
        "nombre",
        "apellidos",
        "edad",
        "nivel",
        "aciertos"
})
public class Jugador
{
    @JsonProperty("nombre")
     String nombre;
    @JsonProperty("edad")
     int edad;
    @JsonProperty("apellidos")
     String apellidos;
    @JsonProperty("nivel")
    String nivel;
    @JsonProperty("aciertos")
    int aciertos;

    public  String getApellidos() {
        return this.apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }

    public void setAciertos(int aciertos) {
        this.aciertos = aciertos;
    }

    public Jugador(){}
   public Jugador(String nombre, String apellidos,int edad)
    {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
    }

    public Jugador(Jugador j) {
        this.nombre=j.nombre;
        this.edad=j.edad;
        this.apellidos=j.apellidos;
    }

    public Jugador (Juego j)
    {
        this.nivel=j.nivel;
        this.aciertos=j.aciertos;
    }

    void setNombre (String nombre)
    {
        this.nombre=nombre;
    }
    String getNombre()
    {
        return this.nombre;
    }


    void setEdad(int edad)
    {
        this.edad=edad;
    }
    int getEdad()
    {
        return this.edad;
    }
}
