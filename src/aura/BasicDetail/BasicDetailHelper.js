({
    loadRecord: function(component) {
        var stdFields = component.get("v.standardFields");
        var extFields = component.get("v.fields");
        var fields = stdFields + (extFields != null
            ? ',' + extFields
            : "");

        var action = component.get("c.getObject");
        action.setParams({recordId: component.get("v.recordId"), objectType: component.get("v.objectType"), fields: fields});

        action.setCallback(this, function(a) {
            console.log(a.getReturnValue());
            component.set("v.record", a.getReturnValue());
        });

        $A.enqueueAction(action);
    },

    setMessage: function(component) {
        component.set("v.message", "This message was set by parent component");
    }
})
