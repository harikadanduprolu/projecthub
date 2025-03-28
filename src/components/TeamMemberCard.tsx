
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMemberCardProps {
  name: string;
  role: string;
  skills: string[];
  avatar?: string;
  university: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  skills,
  avatar,
  university
}) => {
  return (
    <div className="glass-card neon-border rounded-xl overflow-hidden p-5 transition-all duration-300 hover:transform hover:-translate-y-2 animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-neon-purple/50">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center">
              <span className="text-lg font-bold text-white">{name.substring(0, 2)}</span>
            </div>
          )}
          <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-surface-dark"></div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-content-primary">{name}</h3>
          <p className="text-content-secondary text-sm">{university}</p>
        </div>
      </div>
      
      <div className="mb-3">
        <Badge 
          variant="outline" 
          className="bg-neon-blue/10 text-neon-blue border-neon-blue/30"
        >
          {role}
        </Badge>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="bg-neon-purple/10 text-neon-purple border-neon-purple/30 text-xs"
          >
            {skill}
          </Badge>
        ))}
      </div>
      
      <Button 
        variant="outline"
        className="w-full border-neon-pink text-neon-pink hover:bg-neon-pink/10 flex items-center justify-center gap-2"
      >
        <MessageSquare size={16} />
        Connect
      </Button>
    </div>
  );
};

export default TeamMemberCard;
