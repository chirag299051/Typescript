var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(title, views, likes, dislikes, comments, datePublished, channelName, channelSubscribers) {
        var _this = this;
        this.getTitle = function () {
            return _this.title;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getDatePublished = function () {
            return _this.datePublished;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getChannelSubscribers = function () {
            return _this.channelSubscribers;
        };
        this.title = title;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
        this.datePublished = datePublished;
        this.channelName = channelName;
        this.channelSubscribers = channelSubscribers;
    }
    return YoutubeVideo;
}());
var eminemBerzerk = new YoutubeVideo("Berzerk", "218 M", "1.5 M", "60 K", "174 K", "Sep 9 2013", "EminemMusic", "28 M");
var channel = eminemBerzerk.getChannelName();
console.log(channel);
