import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

interface ContactFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactForm({ open, onOpenChange }: ContactFormProps) {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Форма отправлена:", formData)
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.")
    onOpenChange(false)
    setFormData({
      company: "",
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">Подключение к платформе</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Оставьте заявку, и наш менеджер свяжется с вами для настройки доступа
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-zinc-300">
              Компания <span className="text-red-500">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
              placeholder="Название вашей компании"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-300">
              Имя <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
              placeholder="Ваше имя"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
                placeholder="email@company.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-zinc-300">
                Телефон
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="text-zinc-300">
              Месячный бюджет
            </Label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
              placeholder="Например: от 500 000 ₽"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-zinc-300">
              Комментарий
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 min-h-[100px]"
              placeholder="Расскажите о ваших задачах и целях..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-white text-zinc-900 hover:bg-zinc-100 font-medium"
            >
              Отправить заявку
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Отмена
            </Button>
          </div>

          <p className="text-xs text-zinc-500 text-center">
            Нажимая "Отправить заявку", вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
