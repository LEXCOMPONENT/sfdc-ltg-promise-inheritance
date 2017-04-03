({
    startJob: function(cmp, event, helper) {
        cmp.find("result").set('v.value', '');
        var action = cmp.get("c.startProcess");
        action.setParams({"accountId": cmp.get("v.recordId")});

        /*
					the code below defined in AuraPromise.js, which was loaded via <ltng:require scripts="{!$Resource.AuraPromise}"/>

					AuraPromise.serverSideCall(action, cmp).while(fn1, fn2).then(...)

					you can consider promise.while as a regular while syntax:

					while(fn1(response)){
						fn2(response)
					}

					p.s. except the first time, fn1 and fn2 would receive the same response returned from fn2

					in other words, if fn1 didn't return false, then fn2 will keep executing and returning response;
					when fn1 return false, then fn2's response will be captured by the next chained .then()
				*/
        AuraPromise.serverSideCall(action, cmp).while(
						function(response) {
            	return !response.done;
        		},
        		function(response) {
	            cmp.find("result").set('v.value', 'Pending');
	            var action1 = cmp.get("c.isBatchRunning");
	            action1.setParams({"batchId": response.batchId})
	            return AuraPromise.serverSideCall(action1, cmp);
        		}
				).then(function(response) {
                var action2 = cmp.get("c.getBatchResult");
                action2.setParams({"accountId": cmp.get("v.recordId")});
                return AuraPromise.serverSideCall(action2, cmp);
        }).then(function(response) {
            cmp.find("result").set('v.value', response);
        }).catch(function(error) {
            alert('Error: ' + error);
        });
    }
})