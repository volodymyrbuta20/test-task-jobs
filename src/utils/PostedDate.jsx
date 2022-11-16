export default function PostedDate (created) {
    const date = Date.now() - Date.parse(created);
    const years = Math.floor(date / (1000 * 60 * 60 * 24 * 30 * 12))
    const month = Math.floor(date / (1000 * 60 * 60 * 24 * 30) % 12)
    const days = Math.floor(date / (1000 * 60 * 60 * 24) % 30)

    return [years, month, days]
}