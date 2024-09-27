import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const log = val => console.log(val);

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const aFile = fs.readFileSync(path.join(__dirname, "ex.json"));
const { persons } = JSON.parse(aFile);
console.log(persons.map(person => person.name.firstname)); // choi

let count = 0;
if (persons[0].name.firstname === "choi") {
    count++;
}
console.log(count);

const func = () => null;

log(JSON.stringify(persons)); // [{"name":{"firstname":"choi","lastname":"hojun"},"age":26},{"name":"dopago","age":30}]
log(JSON.stringify(func)); // undefined

let xmlString = fs.readFileSync(path.join(__dirname, "xml_ex.xml"));

function xmlToJSON(xml) {
    var obj = {};

    if (xml.nodeType == 1) {
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        } else if (xml.nodeType == 3) {
            obj = xml.nodeValue;
        }
    }

    var textNodes = [].slice.call(xml.childNodes).filter(function (node) {
        return node.nodeType === 3;
    });

    if (xml.hasChildNodes() && xml.childNodes.length == textNodes.length) {
        obj = [].slice.call(xml.childNodes).reduce(function (text, node) {
            return text + node.nodeValue
        }, "");
    } else if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof obj[nodeName] == "undefined") {
                obj[nodeName] = xmlToJSON(item)
            } else {
                if (typeof obj[nodeName].push == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }

                obj[nodeName].push(xmlToJSON(item))
            }
        }
    }

    return obj;
}

var parser = new DOMParser();
var xml = parser.parseFromString(xmlString, "text/xml");
var obj = xmlToJSON(xml);
console.log(obj);

/** XML의 활용
 * SEO 상위 노출
 * Site Map XML -> 크롤러에게 독립적 사이트 정보를 준다
 */

// Open-Api 실습
// 날씨 예측 모델
// https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m
