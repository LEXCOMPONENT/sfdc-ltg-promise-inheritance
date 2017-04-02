# PROMISE

* **Static Resource**
  * [This Javascript file](../assets/AuraPromise.js) made all Promises demonstrated here possible
  * AuraPromise.resource

* **Components Demo**
  * **ManyCallbacks.cmp**
    * functionality
      * click the button and component's javascript controller would call 3 server side apex method sequentially via promise
    * resources
        * AuraPromise.resource
        * ApexController.cls (`getContact()`,`getAccount()`,`getUser()`)
        * ManyCallbacks (aura)
    * notes
      * [Add the lightning component to your record page layout](http://www.forcewizard.com/blog/adding-lightning-components-lightning-experience)
      * [Use Base Lightning Components and Layout](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/lightning_overview.htm)
    * demo
    ![1.gif](/screenshots/1.gif)

* **notes**


  * [How to use Database.Stateful in batch Apex?](https://developer.salesforce.com/forums/?id=906F00000008zJ5IAI)
  * [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
