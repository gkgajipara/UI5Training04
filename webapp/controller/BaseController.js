sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/base/Log"
],
    function (Controller, History, Log) {
        "use strict";

        return Controller.extend("at.clouddna.training04.zhoui5.controller.BaseController", {

            getModel: function (sModelName) {
                return this.getView().getModel(sModelName);
            },

            logDebug: function (sMessage) {
                let oLogger = Log.getLogger(this.getView().getControllerName());
                oLogger.debug("DEBUG - " + sMessage);
            },
            
            logError: function (sMessage) {
                let oLogger = Log.getLogger(this.getView().getControllerName());
                oLogger.error("ERROR - " + sMessage);
            },
            
            logFatal: function (sMessage) {
                let oLogger = Log.getLogger(this.getView().getControllerName());
                oLogger.fatal("FATAL - " + sMessage);
            },
            
            logInfo: function (sMessage) {
                let oLogger = Log.getLogger(this.getView().getControllerName());
                oLogger.info("INFO - " + sMessage);
            },
            
            logTrace: function (sMessage) {
                let oLogger = Log.getLogger(this.getView().getControllerName());
                oLogger.trace("TRACE - " + sMessage);
            },
            
            logWarning: function (sMessage) {
                let oLogger = Log.getLogger(this.getView().getControllerName());
                oLogger.warning("WARNING - " + sMessage);
            },


        });
    });