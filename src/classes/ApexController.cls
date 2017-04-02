public class ApexController {

  /* methods for many callback demo */

  @AuraEnabled
  public static Contact getContact(String contactId) {
    List<Contact> contacts = [SELECT AccountId, Name FROM Contact WHERE Id =: contactId];
    if (contacts.size() == 0)
      return null;
    return contacts[0];
  }

  @AuraEnabled
  public static Account getAccount(String accountId) {
    List<Account> accounts = [SELECT Name, ParentId, OwnerId FROM Account WHERE Id =:accountId];
    if (accounts.size() == 0)
      return null;
    return accounts[0];
  }

  @AuraEnabled
  public static User getUser(String userId) {
    List<User> users = [SELECT Name, ManagerId FROM User WHERE Id =:userId];
    if (users.size() == 0)
      return null;
    return users[0];
  }
}