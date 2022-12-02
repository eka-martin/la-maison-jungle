function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
if (!isSpring) {
    return <div>Ce n'est pas le moment de remporter</div>
}
    return <div>C'est le printemps, remportez</div>

}

export default Recommendation