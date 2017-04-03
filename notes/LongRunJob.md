# LongRunJob

* functionality
  * add the component to Account record home page, click the button and component's javascript controller would run a stateful batch job to calculate the total amount of related opportunities for this specific account (javascript controller would use promise.while to query for batch job's status, and would only call another server call to retrieve the result when the job is completed)

* resources
  * AuraPromise.resource
  * ApexController.cls (`startProcess()`,`isBatchRunning()`,`getBatchResult()`, `class BatchInfo`)
  * LongRunJob (aura)

* notes
  * stateful batch job
    * [How to use Database.Stateful in batch Apex?](https://developer.salesforce.com/forums/?id=906F00000008zJ5IAI)
    * [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
  * promise while
    * `AuraPromise.serverSideCall(action, cmp).while(fn1, fn2).then(...)` - you can consider promise.while as a regular while syntax:
      ```
        while(fn1(response)){
          fn2(response)
        }
      ```
    * p.s. except the first time, fn1 and fn2 would receive the same response returned from fn2
    * in other words, if fn1 didn't return false, then fn2 will keep executing and returning response;
    * when fn1 return false, then fn2's response will be captured by the next chained .then()

* demo
  * component deployed and used in `Lightning Experience Record Page`
    ![1.gif](/screenshots/longrunjob/1.gif)
