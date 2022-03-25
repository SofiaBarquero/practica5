package com.practica5.practica5;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({
        "nivel",
        "aciertos"
})
public class Juego
{
    @JsonProperty("nivel")
    public String nivel;
    @JsonProperty("aciertos")
    public int aciertos;

    public Juego (String nivel, int aciertos)
    {
        this.nivel=nivel;
        this.aciertos=aciertos;
    }

    public Juego(){}

    public String getNivel() {
        return nivel;
    }

    public int getAciertos() {
        return aciertos;
    }
}
