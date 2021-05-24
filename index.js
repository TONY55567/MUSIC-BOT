
    if (message.author.bot) return;
    if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`) 
  if(prefix === null) prefix = default_prefix;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await guild.fetchMember(message); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
     
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd); 
  if (!command) command = client.commands.get(client.aliases.get(cmd)); 
    if (command) 
        command.run(client, message, args); 


}); 

require('./server')();

client.login(token); // if you are not on replit use client.login('TOKEN HERE')
 console.log("YassineHz CopyRights")//Don't Touch!
  console.log("YassineHz CopyRights")
   console.log("YassineHz CopyRights")//Don't Touch!
    console.log("YassineHz CopyRights")
     console.log("YassineHz CopyRights")//Don't Touch!
      console.log("YassineHz CopyRights")
       console.log("YassineHz CopyRights")//Don't Touch!
        console.log("YassineHz CopyRights")
         console.log("YassineHz CopyRights")//Don't Touch!
          console.log("YassineHz CopyRights")
           console.log("YassineHz CopyRights")//Don't Touch!
            console.log("YassineHz CopyRights")
             console.log("YassineHz CopyRights")//Don't Touch!
              console.log("YassineHz CopyRights")
               console.log("YassineHz CopyRights")//Don't Touch!
                console.log("YassineHz CopyRights")
                 console.log("YassineHz CopyRights")//Don't Touch!
                  console.log("YassineHz CopyRights")
                   console.log("YassineHz CopyRights")//Don't Touch!
                    console.log("YassineHz CopyRights")
                     console.log("YassineHz CopyRights")//Don't Touch!
                      console.log("YassineHz CopyRights")
                      //Don't Touch! //Don't Touch! //Don't Touch!
