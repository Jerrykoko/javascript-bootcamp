let restraunt = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount
       return partySize <= seatLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}
restraunt.seatParty(72)
console.log(restraunt.checkAvailability(4))
restraunt.removeParty(5)
console.log(restraunt.checkAvailability(4))