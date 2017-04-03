({
    getAccountOwner: function(cmp, event, helper) {
        // we have access to v.recordId since we implemented "force:hasRecordId"
        console.log('v.recordId ', cmp.get("v.recordId"));

        // fire first server side async call
        var getContact = cmp.get("c.getContact");
        getContact.setParams({"contactId": cmp.get("v.recordId")});
        AuraPromise.serverSideCall(getContact, cmp).then(function(contact) {
            // set variable
            cmp.set('v.contactName', contact.Name);

            // fire second server side async call
            var getAccount = cmp.get("c.getAccount");
            getAccount.setParams({"accountId": contact.AccountId});
            return AuraPromise.serverSideCall(getAccount, cmp);
        }).then(function(account) {
            // set variable
            cmp.set('v.accountName', account.Name);

            // fire third server side async call
            var getUser = cmp.get("c.getUser");
            getUser.setParams({"userId": account.OwnerId});
            return AuraPromise.serverSideCall(getUser, cmp);
        }).then(function(user) {
            // set variable
            cmp.set('v.ownerName', user.Name);
        }).catch(function(error) {
            console.log('Error: ' + error);
        });
    }
})