```mermaid 
flowchart TB
    id5(User:Player 1) -- Enters Game -->
    id1(Random Number Computer Guessing Game)-->id2(Loading) -- Computer deciding range... -->id3(0-100) -- Generating Answer... -->id4(78)-->id6(Ready For User Input...)

    subgraph Guessing Time
%% Main attempt %%
    id6-->id11(Game)-->id7(Computer Game Feedback)
    id6-->id8(Player Input: Player's Guesses)
    end

  subgraph Attempt1
    id7-->id9(THE WATERS ARE FREEZING. TRY AGAIN!)
    id6-->id8-->id10(13) -->id11
    id9 -. Rerouting:Attempt 1 .->id6
  end
  subgraph Attempt2
    id6 -. Attempt 2 .->id8-->id13(40)-->id11-->id7-->id14(STILL COLD, TRY HIGHER.) -. Rerouting:Attempt 2 .->id6
  end
  subgraph Attempt3
    id6 -. Attempt 3 .->id8-->id15(1012)-->id11-->id7-->id16(Bud you ain't even in the right range, go lower.) -. Rerouting:Attempt 3 .->id6
  end
  subgraph Attempt4
    id6 -. Attempt 4 .->id8-->id17(98)-->id11-->id7-->id18(Eh. Closer. GO LOWER.) -. Rerouting:Attempt 4 .->id6
  end
  subgraph Attempt5
    id6 -. Attempt 5 .->id8-->id19(70)-->id11-->id7-->id20(CLOSE! WATERS ARE GETTING HOT.) -. Rerouting:Attempt 5 .->id6
  end
  subgraph Attempt6
    id6 -. Attempt 6 .->id8-->id22(75)-->id11-->id7-->id21(ALMOST THERE!) -. Rerouting:Attempt 6 .->id6
  end
  subgraph Attempt7
    id6 -. Attempt 7 .->id8-->id24(78)-->id11-->id7-->id23(CONGRATULATIONS! YOU WON! 78 WAS THE ANSWER.)
  end

%% YES %%
    id23-->id25(Would you like to play again?)

    id25-->id26(Yes) -. Rerouting to the home page .->id27
    id27(New Game)-->id1
%% NO %%

    id25-->id28(No) -- initiating exiting game -->id29(Shutting off program...)-->id30(End)
%% black pink computer text %%
    style id29 fill:#f9f,stroke:#333,stroke-width:10px
    style id30 fill:#f9f,stroke:#333,stroke-width:10px
    style id25 fill:#f9f,stroke:#333,stroke-width:10px
    style id1 fill:#f9f,stroke:#333,stroke-width:10px
    style id11 fill:#f9f,stroke:#333,stroke-width:10px
    style id7 fill:#f9f,stroke:#333,stroke-width:10px
    style id6 fill:#f9f,stroke:#333,stroke-width:10px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id3 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id4 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
    style id5 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:20px,color:#1E90FF
    style id9 fill:#FFC0CB,stroke:#FF0000,stroke-width:10px,font-size:30px,color:#FF0000

%% orange %%
    style id20 fill:#FFDAB9,stroke:#FFA500,stroke-width:10px,font-size:30px,color:#FFA500
    style id21 fill:#FFDAB9,stroke:#FFA500,stroke-width:10px,font-size:30px,color:#FFA500

%% green %%
    style id23 fill:#90EE90,stroke:#008000,stroke-width:10px,font-size:30px
    style id26 fill:#90EE90,stroke:#008000,stroke-width:10px,font-size:30px


%% red %%

    style id28 fill:#FFC0CB,stroke:#FF0000,stroke-width:10px,font-size:30px,color:#FF0000
    style id18 fill:#FFC0CB,stroke:#FF0000,stroke-width:10px,font-size:30px,color:#FF0000
    style id16 fill:#FFC0CB,stroke:#FF0000,stroke-width:10px,font-size:30px,color:#FF0000
    style id14 fill:#FFC0CB,stroke:#FF0000,stroke-width:10px,font-size:30px,color:#FF0000
    style id10 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF

%% blue %%
    style id19 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF
    style id13 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF
    style id24 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF
    style id15 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF
    style id17 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF
    style id22 fill:#ADD8E6,stroke:#1E90FF,stroke-width:10px,font-size:40px,color:#1E90FF
   

``` 
