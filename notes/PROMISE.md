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
      * understand how to use `flexipage:availableForRecordHome,flexipage:availableForAllPageTypes,force:hasRecordId,force:lightningQuickAction`
        * [Configure Components for Lightning Experience Record Pages](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
        * [Add the lightning component to your record page layout](http://www.forcewizard.com/blog/adding-lightning-components-lightning-experience)
        * [Global Quick Actions vs Object-Specific Quick Actions](https://trailhead.salesforce.com/modules/salesforce1_mobile_app)
          * global actions - create global action from `SETUP/User Interface/Global Actions/Global Actions`, and create global action from `SETUP/User Interface/Global Actions/Publisher Layouts` (global actions can be found in Home/Chatter tab for classic version or the right corner's plus sign dropdown list for lightning version)
          * object-specific action - create object-specific action from each object's `Buttons, links, and Actions`, and deploy object-specific action in each object's Page Layout (object-specific actions can be found in Record page)
          ![1.png](/screenshots/1.png)
          ![2.png](/screenshots/2.png)
        * [Configure Components for Custom Actions](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action.htm)
      * [Use Base Lightning Components and Layout](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/lightning_overview.htm)
    * demo
    ![1.gif](/screenshots/1.gif)
    ![2.gif](/screenshots/2.gif)
    ![3.gif](/screenshots/3.gif)

* **notes**


  * [How to use Database.Stateful in batch Apex?](https://developer.salesforce.com/forums/?id=906F00000008zJ5IAI)
  * [Using Batch Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch_interface.htm)
