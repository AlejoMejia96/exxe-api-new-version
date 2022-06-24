const soap = require("soap")
const express = require("express")
const util = require("util")

var url = "http://testsolex.blulogistics.net/solexPRE/services/webservicesolex.asmx?WSDL";

var xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
<soap:Header/>
<soap:Body>
   <tem:CrearGuiaBlulogisticsV2>
      <!--Optional:-->
      <tem:user>testwschacam</tem:user>
      <!--Optional:-->
      <tem:password>testwschacam</tem:password>
      <!--Optional:-->
      <tem:guia>
         <!--Optional:-->
         <tem:DestinatarioIdentificacion>1</tem:DestinatarioIdentificacion>
         <!--Optional:-->
         <tem:DestinatarioNombre>prueba</tem:DestinatarioNombre>
         <!--Optional:-->
         <tem:DestinatarioDireccion>calle 17</tem:DestinatarioDireccion>
         <!--Optional:-->
         <tem:DestinatarioTelefono>1234567</tem:DestinatarioTelefono>
         <!--Optional:-->
         <tem:CiudadOrigen>11001</tem:CiudadOrigen>
         <!--Optional:-->
         <tem:CiudadDestino>11001</tem:CiudadDestino>
         <!--Optional:-->
         <tem:Observacion>prueba</tem:Observacion>
         <!--Optional:-->
         <tem:DestinatarioBarrio>?</tem:DestinatarioBarrio>
         <tem:Kilos>3</tem:Kilos>
         <tem:ValorDeclarado>5000</tem:ValorDeclarado>
         <tem:Cantidad>2</tem:Cantidad>
         <tem:IdCuentaCliente>19496</tem:IdCuentaCliente>
         <!--Optional:-->
         <tem:DocumentoExterno>rf001</tem:DocumentoExterno>
         <!--Optional:-->
         <!--Optional:-->
      </tem:guia>
   </tem:CrearGuiaBlulogisticsV2>
</soap:Body>
</soap:Envelope>`;

soap.createClient(url, function (err, client){
    if (err)
        console.log(err);
    else {
        client.Prueba(xml, function(err, response){
            if(err)
                console.log(err);
            else {
                console.log(util.inspect(response, {showHidden: false, depth: 6}));
            }
        })
    }
})