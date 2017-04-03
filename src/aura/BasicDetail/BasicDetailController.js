({
    doInit: function(component, event, helper) {
        helper.loadRecord(component);
        helper.setMessage(component);
        // var cc = component.getConcreteComponent();
        // cc.getDef().getHelper().setMessage(cc);
    }
})
