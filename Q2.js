function getHandScore(input){
    cards = input.split(" ")
    suits = {'H':[],'C':[],'D':[],'S':[]}
    ranks = {}
    score = 0
    isSamerank = false
    for(let i=0;i<cards.length;i++){ //loop S8 S8 CA
        card = cards[i]//S8
        suit = card.substring(0,1)//S
        rank = card.substring(1)//8
        if(rank=='A'){
            score+=11
        }else if(rank=='J'||rank=='Q'||rank=='K'){
            score+=10
        }else{
            score+=parseInt(rank)
        }
        if(suits[suit].length>0){
            prev_value = suits[suit].pop()
            suits[suit].push(score+prev_value)
        }else{
            suits[suit].push(score)
        }
        score = 0
        if(ranks[rank]){
            ranks[rank].push(card)
        }else{
            ranks[rank] = [card]
        }
    }
    for(const rank in ranks){
        if(ranks[rank].length ===3){
            isSamerank = true
            break;
        }
    }
    if(isSamerank){
        if(ranks["A"] && ranks["A"].length === 3){
            answer = 35
        }else{
            answer = 32.5
        }
    }else{
        max = 0
        var count= Object.keys(suits).length;
        for(let j in suits){
            if(max<suits[j][0]){
                max = suits[j][0]
            }
        }
        answer = max
    }
    return answer;
    }

console.log(getHandScore("HA D1 S10"))