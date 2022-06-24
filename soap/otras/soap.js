const soapRequest = require('easy-soap-request');

const url = 'testsolex.blulogistics.net/solexPRE/services/webservicesolex.asmx';

const sampleheaders = {
    'Content-Type': 'text/xml;charset=utf-8',
    'SOAPAction': 'http://tempuri.org/CrearGuiaBlulogisticsV2'
};

const xml = `
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <CrearGuiaBlulogisticsV2 xmlns="http://tempuri.org/">
            <user>testwschacam</user>
            <password>testwschacam</password>
            <guia>
                <DestinatarioIdentificacion>104005</DestinatarioIdentificacion>
                <DestinatarioNombre>pipe</DestinatarioNombre>
                <DestinatarioDireccion>cll 7</DestinatarioDireccion>
                <DestinatarioTelefono>568300</DestinatarioTelefono>
                <CiudadOrigen>cali</CiudadOrigen>
                <CiudadDestino>bogota</CiudadDestino>
                <Observacion>DELICADO</Observacion>
                <DestinatarioBarrio>SAN LUIS</DestinatarioBarrio>
                <Kilos>10</Kilos>
                <ValorDeclarado>250000</ValorDeclarado>
                <Cantidad>1</Cantidad>
                <IdCuentaCliente>221045</IdCuentaCliente>
                <DocumentoExterno>factura67</DocumentoExterno>
                <Guia>41256</Guia>
                <OtrosNumeros>
                    <string>12315</string>
                    <string>998654</string>
                </OtrosNumeros>
                    <Correo>mail@mail.com</Correo>
                    <ValorRecaudo>3000000</ValorRecaudo>
                    <TipoOperacion>contra entrega</TipoOperacion>
                    <TipoProducto>carne</TipoProducto>
            </guia>
        </CrearGuiaBlulogisticsV2>
    </soap:Body>
</soap:Envelope>
`;

(async () => {
    const { response } = await soapRequest({ url: url, headers: sampleheaders, xml: xml });
    const { headers, body, statusCode } = response;
    console.log(headers);
    console.log(body);
    console.log(statusCode);
})();