(function(g){

const A="https://www.perplexity.ai/search?model=auto&q=";

const T="You are a Bible scholar, motivator and friend motivate me and explain to me todays verse.\n\
Use ESV translation only.\n\
Provide historical background, author, date written, themes, key characters, chronological events, spiritual lessons, personal motivation, and proper scripture citations.\n\
Respond in clean plain no emdash.\n\
38% Tagalog natural.\n\
CONTENT:\n";

const B="Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalms|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation".split("|");

function build(x){
return A+encodeURIComponent(T+x);
}

function open(url){
return g.open(url,"_blank","width=900,height=900,noopener,noreferrer");
}

function byNow(p){
try{
var s=new URLSearchParams(p||g.location.search);
var b=parseInt(s.get("book"),10);
if(b>0&&b<67)
return open(build("Book: "+B[b-1]+" (ESV). Give structured biblical data and chapter overview summary."));
var d=new Date().toISOString().slice(0,10);
return open(build("Give the ESV verse of the day for "+d+". Explain it deeply and motivate us for today."));
}catch(e){}
}

g.byNow=byNow;

})(window);
