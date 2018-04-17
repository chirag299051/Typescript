class YoutubeVideo {

    title : string;
    views : string;
    likes : string;
    dislikes : string;
    comments : string;
    datePublished : string;
    channelName : string;
    channelSubscribers : string

    constructor(title : string,views : string,likes : string,dislikes : string,comments : string,datePublished : string,channelName : string,channelSubscribers : string){
        this.title = title
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.comments = comments
        this.datePublished = datePublished
        this.channelName = channelName
        this.channelSubscribers = channelSubscribers
    }

    getTitle = ()=>{
        return this.title
    }
    getViews = ()=>{
        return this.views
    }
    getLikes = ()=>{
        return this.likes
    }
    getDislikes = ()=>{
        return this.dislikes
    }
    getComments = ()=>{
        return this.comments
    }
    getDatePublished = ()=>{
        return this.datePublished
    }
    getChannelName = ()=>{
        return this.channelName
    }
    getChannelSubscribers = ()=>{
        return this.channelSubscribers
    }
}

let eminemBerzerk = new YoutubeVideo("Berzerk","218 M","1.5 M","60 K","174 K","Sep 9 2013","EminemMusic","28 M")
let channel = eminemBerzerk.getChannelName()
console.log(channel)