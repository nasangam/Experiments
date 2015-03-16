(function(){
    var app = angular.module('notificationTrayApp');
    var addData = [
        {
            "type": "information",
            "title": "Reports are ready...",
            "body": "Following reports have been processed and are ready for your review.",
            "actions": [
                { "name":"Employee Details Report", "type": "link", "url": "http://url"},
                { "name":"Detailed Tax Report", "type": "link", "url": "http://url"}
            ]
        },
        {
            "type": "alert",
            "title": "Amendments are due today...",
            "body": "Following amendments are due today...",
            "actions": [
                { "name":"Amendment #7065", "type": "link", "url": "http://url"},
                { "name":"Amendment #4018", "type": "link", "url": "http://url"}
            ]
        },
        {
            "type": "Information",
            "title": "Last day to file your taxes...",
            "body": "Today is the last day to file your taxes",
            "actions": [
                { "name":"Take action", "type": "button", "url": "http://url"}
            ]
        },{
            "type": "Information",
            "title": "Latest News:Tax slabs changed...",
            "body": "Obama announced the revision of tax slabs...",
            "actions": [
                { "name":"read more...", "type": "link", "url": "http://url"}
            ]
        },{
            "type": "Information",
            "title": "Holidays",
            "body": "Due to Xmas holidays please expect delays in tax processing",
            "actions": [
                { "name":"Click for more details", "type": "link", "url": "http://url"}
            ]
        },
    ];
    app.value("notifications",addData);
})();
