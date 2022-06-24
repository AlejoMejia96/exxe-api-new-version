const soapRequest = require("easy-soap-request");
const fs = require("fs");

const url = "http://testsolex.blulogistics.net/solexPRE/services/webservicesolex.asmx";
const sampleHeaders = {
    'Content-Type': 'text/xml;charset=UTF-8',
    'Host': 'testsolex.blulogistics.net', 
    /* 'Content-Length': 'length', */
    'SOAPAction': 'http://tempuri.org/CrearGuiaBlulogisticsV2',
};
const xml = fs.readFileSync('./elquesirve.xml', 'utf-8');

async function elRequest() {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 });
    console.log(response);
    const { body } = response;
    console.log(body);
    document.body.innerHTML = body;
}

module.exports = { elRequest }