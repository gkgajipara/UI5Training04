sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "at/clouddna/training04/zhoui5/data/formatter/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment, Formatter) {
        "use strict";
        return Controller.extend("at.clouddna.training04.zhoui5.controller.Main", {

            _fragmentList: {},
formatter:  Formatter,

            onInit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                const oEditModel = new JSONModel({
                    editmode: false
                });



                this.getView().setModel(oEditModel, "editModel");

                this._showCustomerFragment("CustomerDisplay");

                oRouter.getRoute("RouteCustomer").attachPatternMatched(this._onPatternMatched, this);
            },
            _onPatternMatched: function (oEvent) {
                let path = decodeURIComponent(oEvent.getParameters().arguments["path"]);
                this.getView().bindElement(path);
            },
            genderFormatter: function (sKey) {
                let oView = this.getView();
                let oI18nModel = oView.getModel("i18n");
                let oResourceBundle = oI18nModel.getResourceBundle();
                let sText = oResourceBundle.getText(sKey);
                return sText;
            },
            _showCustomerFragment: function (sFragmentName) {
                let page = this.getView().byId("ObjectPageLayout");

                page.removeAllSections();

                if (this._fragmentList[sFragmentName]) {
                    page.addSection(this._fragmentList[sFragmentName]);
                } else {
                    Fragment.load({
                        id: this.getView().createId(sFragmentName),
                        name: "at.clouddna.training04.zhoui5.view.fragment." + sFragmentName,
                        controller: this
                    }).then(function (oFragment) {
                        this._fragmentList[sFragmentName] = oFragment;
                        page.addSection(this._fragmentList[sFragmentName]);
                    }.bind(this));
                }
            },

            onEditPress: function () {
                this._toggleEdit(true);
            },

            _toggleEdit: function (bEditMode) {
                let oEditModel = this.getView().getModel("editModel");

                oEditModel.setProperty("/editmode", bEditMode);

                this._showCustomerFragment(bEditMode ? "CustomerEdit" : "CustomerDisplay");
            },

            onSavePressed: function () {
                let oModel = this.getView().getModel();
                let oData = oModel.getData();
                MessageBox.success(JSON.stringify(oData));

                this._toggleEdit(false);
            },

            onCancelPressed: function () {
                this._toggleEdit(false);
            },

        });
    });
