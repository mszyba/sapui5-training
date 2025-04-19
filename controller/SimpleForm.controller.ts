import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";
import MessageToast from "sap/m/MessageToast";


/**
 * @namespace ui5.walkthrough.controller
 */
export default class SimpleForm extends Controller {

    onInit(): void {

    }

    onSayHello(): void {
     MessageToast.show('"kjkkjkjkjk');
    }

};