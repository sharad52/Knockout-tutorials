function WebmailViewModel() {
    var self = this;
    self.folders = ['Inbox','Outbox','Archive','Sent','Spam'];
    self.chosenFolderId = ko.observable();
    self.goToFolder = (folder) => { 
        self.chosenFolderId(folder);
        $.get('/mail',{folder:folder},self.chosenFolderData);
        
    };
    self.goToFolder('Inbox');
   

};

ko.applyBindings(new WebmailViewModel());